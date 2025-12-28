var Car;
(function (Car) {
    Car["model"] = "1990";
    Car["color"] = "cherry";
})(Car || (Car = {}));
function crs(type) {
    console.log(type);
}
crs(Car.color);
export {};
//# sourceMappingURL=12_enum.js.map