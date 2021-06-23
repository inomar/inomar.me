import Link from 'next/link';
import Head from 'next/head';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'home', page: '/' },
  { label: 'blog', page: '/blog' },
  { label: 'contact', page: '/contact' },
  { label: 'about', page: '/about' },
];

const ogImageUrl = 'og-image.png'; // TODO: 変更

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : ''} 不定期更新症候群 -
          webエンジニアのブログ -
        </title>
        <meta
          name="description"
          content="不定期に更新しているwebエンジニアのブログです。カテゴリ関係なく気ままに発信しています。"
        />
        <meta
          name="og:title"
          content="不定期更新症候群 - webエンジニアのブログ -"
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@macoto_chan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <div>
        <h1 className="title">不定期更新症候群</h1>
      </div>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
