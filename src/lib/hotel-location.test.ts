import { test, expect } from "bun:test";
import { hotelLocation } from "./hotel-location";

test("Hotel DRB is 50 meters away from Marthandam Flyover", () => {
  expect(hotelLocation.distanceMeters).toBe(50);
  expect(hotelLocation.landmark).toBe("Marthandam Flyover");
});