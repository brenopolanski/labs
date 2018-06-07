import mongoose, { Schema } from 'mongoose'

const articlesSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

articlesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Articles', articlesSchema)

export const schema = model.schema
export default model
