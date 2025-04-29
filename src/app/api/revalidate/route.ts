import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json()
    
    if (!path) {
      return NextResponse.json(
        { message: 'Path is required' },
        { status: 400 }
      )
    }

    revalidatePath(path)
    
    return NextResponse.json(
      { message: 'Revalidation successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error during revalidation:', error)
    return NextResponse.json(
      { message: 'Error during revalidation' },
      { status: 500 }
    )
  }
} 