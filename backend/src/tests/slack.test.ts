import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import app from "../app"
import { client } from '../controllers/__mocks__/getClient';

vi.mock("../controllers/slackController");

describe("GET /slack/channels", () => {
    it("return error as no JWT token is passed", async () => {
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

        const res = await request(app).get("/slack/channels").send();

        expect(res.statusCode).toBe(401);
    })
});