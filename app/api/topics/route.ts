import connectMongoDb from '@/libs/mongofb';
import Topic from '@/models/topic';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await connectMongoDb();
  await Topic.create({
    title,
    description,
  });

  return NextResponse.json(
    { message: 'Topic Created' },
    {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

export async function GET() {
  await connectMongoDb;
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  await connectMongoDb;
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: 'Topic deleted' },
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
