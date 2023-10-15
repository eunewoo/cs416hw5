const UserSchema = new Schema({
  userID: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  activate: {
    type: Boolean,
    required: true,
  },
  mapList: [Number],
});

const ManagerSchema = new Schema({
  ManagerID: {
    type: Number,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Username: {
    type: String,
    required: true,
    maxlength: 20,
  },
  Password: {
    type: String,
    required: true,
  },
  Profile: String,
  MapList: [Number],
});

const RatingsSchema = new Schema({
  email: {
    type: String,
    ref: "User",
    required: true,
  },
  mapID: {
    type: Number,
    ref: "Map",
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
});

const CommentSchema = new Schema({
  commentID: {
    type: Number,
    unique: true,
    required: true,
  },

  email: {
    type: String,
    ref: "User",
    required: true,
  },
  username: String,
  date: Date,
  likes: [Number],
  dislikes: [Number],
});

const mapSchema = new Schema({
  mapType: { type: Number, min: 1, max: 5, required: true },
  title: { type: String, required: true },
  description: String,
  mapID: { type: Number, unique: true, required: true },
  rate: { type: Number, min: 0, max: 5 },
  comment: [Number],
  mapFile: { type: String, required: true },
  date: { type: Date, required: true },
});

const Map = mongoose.model("Map", mapSchema);

const pictureMapSchema = new Schema({
  mapID: { type: Number, ref: "Map", required: true },
  locationIds: [Number],
});

const locationSchema = new Schema({
  LocationID: { type: Number, ref: "PictureMap", required: true },
  name: String,
  libraryIds: { type: Number, required: true },
  longitude: String,
  latitude: String,
});

const librarySchema = new Schema({
  LibraryID: { type: Number, ref: "Location", required: true },
  name: String,
  images: [String],
});

const arrowMapSchema = new Schema({
  mapID: { type: Number, ref: "Map", required: true },
  maxpin: { type: Number, min: 2, max: 10, required: true },
  locationIds: [Number],
});

const arrowPointLocationSchema = new Schema({
  name: String,
  locationId: { type: Number, ref: "ArrowMap", required: true },
  longitude: Number,
  latitude: Number,
  order: {
    type: Number,
    min: 2,
    max: 10,
    required: true,
  },
  date: Date,
});

const bubbleMapSchema = new Schema({
  mapID: { type: Number, ref: "Map", required: true },
  locationIds: [Number],
});

const bubblePointLocationSchema = new Schema({
  name: String,
  locationId: { type: [Number], ref: "BubbleMap", required: true },
  longitude: Number,
  latitude: Number,
  color: Number,
});

const categoryMapSchema = new Schema({
  mapID: { type: Number, ref: "Map", required: true },
  category: [Number],
});

const categoryPolygonSchema = new Schema({
  locationId: { type: [Number], ref: "CategoryMap", required: true },
  name: String,
  color: Number,
});

const categoryPolygonCoordinateSchema = new Schema({
  locationId: [Number],
  coordinate: Array,
});

const scalePolygonSchema = new Schema({
  name: String,
  locationId: Number,
  coordinate: Array,
});

const ScaleMapSchema = new Schema({
  MapID: {
    type: Number,
    required: true,
    unique: true,
  },
  MinColor: {
    type: Number,
    required: true,
  },
  MaxColor: {
    type: Number,
    required: true,
  },
  LocationIds: [
    {
      type: Number,
    },
  ],
});
