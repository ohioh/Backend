module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: String,
      username: String,
password: String,
phonenumber: String,
address : String

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("contacteddevice", schema);
  return Tutorial;
};
