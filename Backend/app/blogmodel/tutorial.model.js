module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      latitude: String,
      longitude: String,
parentdeviceid: String,
available: Boolean,
type : String,
class : String

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("blog", schema);
  return Tutorial;
};
