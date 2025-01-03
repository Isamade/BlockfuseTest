import mongoose from 'mongoose';
const { connect } = mongoose;

const db = 'mongodb://localhost:27017';


const connectMongoDB = () => {
	try {
		connect(db, {
			useNewUrlParser: false,
			useCreateIndex: false,
			useFindAndModify: false,
			useUnifiedTopology: false
        });

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

export default connectMongoDB;