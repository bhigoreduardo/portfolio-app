import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: [true, 'Categoria é obrigatória'] },
    reviews: {
      type: [{
        stars: { type: Number, min: 1, max: 5 },
        description: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: [true, 'Cliente é obrigatório'] },
      }],
      default: [], _id: false
    },
    compositeKey: {
      type: {
        store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: [true, "Loja é obrigatória"] },
        name: { type: String, required: [true, 'Nome é obrigatório'] },
        slug: { type: String, required: true },
      },
      required: true, unique: true, _id: false,
    },
    description: { type: String, required: [true, 'Descrição é obrigatório'] },
    price: { type: Number, required: [true, 'Preço é obrigatório'] },
    promotion: { type: Number },
    image: { type: String },
    status: { type: Boolean, default: true },
    sales: { type: Number, default: 0 },
    reviewsAvg: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
