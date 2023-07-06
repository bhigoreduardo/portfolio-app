import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    compositeKey: {
      type: {
        store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: [true, "Loja é obrigatória"] },
        name: { type: String, required: [true, 'Nome é obrigatório'] },
        slug: { type: String, required: true },
      },
      required: true, unique: true, _id: false,
    },
    status: { type: Boolean, default: true },
    products: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], default: [] }
  },
  { timestamps: true },
);

export default mongoose.model("Category", CategorySchema);