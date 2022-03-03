import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const messageSchema = new Schema(
    {
        body: {
            type: String,
        },
        sentAt: {
            type: Date,
            default: Date.now,
        }
    }
);


const Message = model('Message', messageSchema);

export default Message;
