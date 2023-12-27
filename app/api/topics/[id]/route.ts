import { NextRequest, NextResponse } from 'next/server';
import Topic from '@/models/topic';
import connectMongoDb from '@/libs/mongofb';
import { ObjectId } from 'mongoose';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: ObjectId } }
) {
  const { id } = params;
  await connectMongoDb();
  const topic = await Topic.findById(id);
  return NextResponse.json(
    { topic },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: ObjectId } }
) {
  const { id } = params;
  const { title, description } = await request.json();
  await connectMongoDb();
  const newTopic = await Topic.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  return NextResponse.json(
    { newTopic },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
