module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      latitude: String,
      longitude: String,
  areaname: String,
  blognumber: String,
  totalavailable : String

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("parentdevice", schema);
  return Tutorial;
};
