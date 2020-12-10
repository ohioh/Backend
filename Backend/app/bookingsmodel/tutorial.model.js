module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      parentdeviceid: String,
      blogid: String,
userid: String,
paymentstatus: String,
parkingclass : String,
parkingduration: String,
parkingtime : String

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Booking = mongoose.model("booking", schema);
  return Booking;
};
