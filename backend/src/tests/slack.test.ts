import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import app from "../app"
import { client } from '../controllers/__mocks__/getClient';

// Mocking the Slack controller
vi.mock("../controllers/slackController");

// Describing the test for GET /slack/channels endpoint
describe("GET /slack/channels", () => {
    // Test case: No JWT token passed
    it("return error as no JWT token is passed", async () => {

        // Putting a mock value for the below function
        client.conversations.list.mockResolvedValue({
            ok: true,
            channels: [
                {
                    id: "C01XXXXXXXX",
                    name: "general"
                },
                {
                    id: "C02XXXXXXXX",
                    name: "random"
                },
            ]  
        })

        // Hit the endpoint
        const res = await request(app).get("/slack/channels").send();

        // Expects the status code to be 401
        expect(res.statusCode).toBe(401);
    })
});