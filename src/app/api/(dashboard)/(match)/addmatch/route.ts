import { db } from "@/server/db";
import { match } from "@/server/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const newmatch = await request.json();
    await db.insert(match).values(newmatch);
    return NextResponse.json({ msg: "match created" });
  } catch (e) {
    console.log(e);
  }
} 
// import { db } from "@/server/db";
// import { match } from "@/server/db/schema";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     const newmatch = await request.json();
    
//     // Log the incoming data for debugging
//     console.log('Received data:', newmatch);

//     // Ensure all required fields are present
//     // if (!newmatch.championshipId) {
//     //   return NextResponse.json({ error: "championshipId is required" }, { status: 400 });
//     // }

//     await db.insert(match).values(newmatch);
//     return NextResponse.json({ msg: "match created" });
//   } catch (e) {
//     console.error('Error inserting match:', e);
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }
// import { db } from "@/server/db"; // Adjust the import path as necessary
// import { match } from "@/server/db/schema";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     const rawBody = await request.text();
//     console.log('Raw request body:', rawBody);

//     let newMatch;
//     try {
//       newMatch = JSON.parse(rawBody);
//     } catch (e) {
//       console.error('Error parsing JSON:', e);
//       return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
//     }

//     // Log the incoming data for debugging
//     console.log('Parsed JSON data:', newMatch);

//     // Check for required fields
//     const { championshipId, teamId, courtId, stateId, matchDate, matchTime } = newMatch;
//     if (!championshipId || !teamId || !courtId || !stateId || !matchDate || !matchTime) {
//       return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
//     }

//     // Verify that championshipId exists in demo_championship table
//     const championship = await db.query.demo_championship.findFirst({
//       where: { id: championshipId },
//     });
//     if (!championship) {
//       return NextResponse.json({ error: "championshipId does not exist" }, { status: 400 });
//     }

//     // Verify that teamId exists in demo_team table
//     const team = await db.query.demo_team.findFirst({
//       where: { id: teamId },
//     });
//     if (!team) {
//       return NextResponse.json({ error: "teamId does not exist" }, { status: 400 });
//     }

//     // Verify that courtId exists in demo_court table
//     const court = await db.query.demo_court.findFirst({
//       where: { id: courtId },
//     });
//     if (!court) {
//       return NextResponse.json({ error: "courtId does not exist" }, { status: 400 });
//     }

//     // Verify that stateId exists in demo_state table
//     const state = await db.query.demo_state.findFirst({
//       where: { id: stateId },
//     });
//     if (!state) {
//       return NextResponse.json({ error: "stateId does not exist" }, { status: 400 });
//     }

//     // Insert the new match into the database
//     await db.insert(match).values({
//       championshipId,
//       teamId,
//       courtId,
//       stateId,
//       matchDate,
//       matchTime
//     });

//     return NextResponse.json({ msg: "Match created" });
//   } catch (e) {
//     console.error('Error inserting match:', e);
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }
