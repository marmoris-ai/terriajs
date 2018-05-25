import Class from '../Core/Class';
import instanceOf from '../Core/instanceOf';
import ModelReference from '../Definitions/ModelReference';
import Model from './Model';
import * as RuntimeError from 'terriajs-cesium/Source/Core/RuntimeError';

export default class Terria {
    private models = new Map<string, Model>();

    getModelById<T extends Model>(type: Class<T>, id: ModelReference): T {
        if (ModelReference.isRemoved(id)) {
            return undefined;
        } else {
            const model = this.models.get(id);
            if (instanceOf(type, model)) {
                return model;
            }

            // Model does not have the requested type.
            return undefined;
        }
    }

    addModel(id: ModelReference, model: Model) {
        if (ModelReference.isRemoved(id)) {
            return;
        }

        if (this.models.has(id)) {
            throw new RuntimeError('A model with the specified ID already exists.')
        }

        this.models.set(id, model);
    }
}
