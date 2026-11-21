import { test } from "node:test";
import assert from "node:assert/strict";
import { hotelLocation } from "./hotel-location";

test("Hotel DRB is 50 meters away from Marthandam Flyover", () => {
  assert.equal(hotelLocation.distanceMeters, 50);
  assert.equal(hotelLocation.landmark, "Marthandam Flyover");
});

test("Hotel DRB is 500 meters away from Marthandam Bus Stand", () => {
  assert.equal(hotelLocation.busStandDistanceMeters, 500);
  assert.equal(hotelLocation.busStand, "Marthandam Bus Stand");
});

test("Hotel DRB is 1 km away from Kulithurai Railway Station", () => {
  assert.equal(hotelLocation.railwayStationDistanceKm, 1);
  assert.equal(hotelLocation.railwayStation, "Kulithurai Railway Station");
});