import mongoose, { Document, Schema } from 'mongoose';

interface Diner {
  name: string;
  email: string;
  // Add other fields as needed
}

interface DinerDocument extends Diner, Document {}

const DinerSchema = new Schema<DinerDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Add other fields as needed
});

const DinerModel = mongoose.model<DinerDocument>('Diner', DinerSchema);

export default DinerModel;