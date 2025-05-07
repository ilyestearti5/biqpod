import { W as a } from "./SeparatedComponents-DGAeX4lX.mjs";
class t extends a {
  async setNavigationBarColor(o) {
    console.log("Cannot setNavigationBarColor on web", o);
  }
  async getNavigationBarColor() {
    return console.log("Cannot getNavigationBarColor on web"), { color: "#000000" };
  }
}
export {
  t as NavigationBarWeb
};
