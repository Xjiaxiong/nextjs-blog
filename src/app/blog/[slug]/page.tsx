import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div>
        <Link href="/blog" style={{ display: 'inline-block', marginBottom: '1rem' }}>
          ← 返回博客列表
        </Link>
      </div>
      <div>博客文章: {params.slug}</div>
    </div>
  );
}