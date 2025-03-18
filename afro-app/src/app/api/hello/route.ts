  export async function GET() {
    const params=[{ id:2,src:"./pool2.jpg" },{ id:3,src:"./pool3.jpg" },{ id:4,src:"./pool4.jpg" },{ id:5,src:"./pool5.jpg" },{ id:6,src:"./pool6.jpg" }]
    return new Response(JSON.stringify(params), {
      headers: { "Content-Type": "application/json" },
    });
  }