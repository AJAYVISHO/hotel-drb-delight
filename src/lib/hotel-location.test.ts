import { test } from "node:test";
import assert from "node:assert/strict";
import { hotelLocation } from "./hotel-location";

test("Hotel DRB is 50 meters away from Marthandam Flyover", () => {
  assert.equal(hotelLocation.distanceMeters, 50);
  assert.equal(hotelLocation.landmark, "Marthandam Flyover");
});