const { Int32 } = require("mongodb");

module.exports = mongoose => {
    const Student= mongoose.model(
        'student',
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          studentId: Number
        },
      )
    );
    return Student;
  };