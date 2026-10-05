import type { ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <section style={{ border: '1px solid #999', padding: '16px', marginTop: '16px' }}>
            <h2>Раздел «Блог»</h2>
            <p>Этот блок отрисовывается один раз и сохраняется при переходах.</p>
            {children}
        </section>
    );
}