import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myportfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // not supported
    // useCreateIndex: true,
    // useFindAndModify: false,
});

export default mongoose.connection;
