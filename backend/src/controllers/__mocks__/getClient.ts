import { WebClient } from "@slack/web-api";
import { getClient } from "../../config/slack";
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const client = mockDeep<WebClient>();