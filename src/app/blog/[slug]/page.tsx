import Link from 'next/link';

// 使用 any 类型暂时绕过类型检查
export default function BlogPost({ params }: any) {
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