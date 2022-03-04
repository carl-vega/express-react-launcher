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
        },
        reply: {
            type: String,
        }
    }
);


const Message = model('Message', messageSchema);

export default Message;
