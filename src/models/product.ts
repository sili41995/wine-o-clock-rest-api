import { Schema, model } from 'mongoose';
import { preUpdate, handleMongooseError } from './hooks';
import { DefaultURL, Messages } from '../constants';
import { IProduct } from '../types/types';
import ModelNames from './modelNames';

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, Messages.titleReqErr],
    },
    price: {
      type: Number,
      required: [true, Messages.priceReqErr],
    },
    adminDiscountPercentage: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: [true, Messages.descriptionReqErr],
    },
    quantity: {
      type: Number,
      required: [true, Messages.quantityReqErr],
    },
    bottleCapacity: {
      type: Number,
      required: [true, Messages.bottleCapacityReqErr],
    },
    alcohol: {
      type: Number,
      required: [true, Messages.alcoholReqErr],
    },
    isNewCollection: {
      type: Boolean,
      default: false,
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },
    isSale: {
      type: Boolean,
      default: false,
    },
    isWineTimePromotion: {
      type: Boolean,
      default: false,
    },
    winemaking: {
      type: String,
      required: [true, Messages.winemakingReqErr],
    },
    grapeVarieties: {
      type: String,
      required: [true, Messages.grapeVarietiesReqErr],
    },
    tastingNotes: {
      type: String,
      required: [true, Messages.tastingNotesReqErr],
    },
    storeAndServeAdvices: {
      type: String,
      required: [true, Messages.storeAndServeAdvicesReqErr],
    },
    foodPairing: {
      type: String,
      required: [true, Messages.foodPairingReqErr],
    },
    reviewsAndAwards: {
      type: String,
      required: [true, Messages.reviewsAndAwardsReqErr],
    },
    wineColor: {
      type: String,
      required: [true, Messages.wineColorReqErr],
    },
    sugarConsistency: {
      type: String,
      required: [true, Messages.sugarConsistencyReqErr],
    },
    country: {
      type: String,
      required: [true, Messages.countryReqErr],
    },
    region: {
      type: String,
      required: [true, Messages.regionReqErr],
    },
    evaluation: {
      type: Number,
      required: [true, Messages.evaluationReqErr],
    },
    comments: {
      type: [
        {
          owner: Schema.Types.ObjectId,
          comment: {
            type: String,
            required: [true, Messages.commentReqErr],
          },
        },
      ],
      default: [],
    },
    bottlesSoldCounter: {
      type: Number,
      required: [true, Messages.bottlesSoldCounterReqErr],
    },
    imageUrl: {
      type: String,
      default: DefaultURL.productURL,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.pre('findOneAndUpdate', preUpdate);
productSchema.post('save', handleMongooseError);
productSchema.post('findOneAndUpdate', handleMongooseError);

const Product = model<IProduct>(ModelNames.product, productSchema);

export { Product };
