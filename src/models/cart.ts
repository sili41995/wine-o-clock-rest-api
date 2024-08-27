import { model, Schema } from 'mongoose';
import ModelNames from './modelNames';
import { ICart } from '../types/types';
import { handleMongooseError, preUpdate } from './hooks';

const cartSchema = new Schema<ICart>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    amount: {
      type: Number,
      default: 1,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

cartSchema.pre('findOneAndUpdate', preUpdate);
cartSchema.post('save', handleMongooseError);
cartSchema.post('findOneAndUpdate', handleMongooseError);

const Cart = model<ICart>(ModelNames.cart, cartSchema);

export { Cart };
