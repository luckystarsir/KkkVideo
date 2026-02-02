import Link from 'next/link';
import Image from 'next/image';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Icons } from '@/components/ui/Icon';
import { siteConfig } from '@/lib/config/site-config';

interface NavbarProps {
    onReset: () => void;
    isPremiumMode?: boolean;
}

export function Navbar({ onReset, isPremiumMode = false }: NavbarProps) {
    const settingsHref = isPremiumMode ? '/premium/settings' : '/settings';

    return (
        <nav className="sticky top-0 z-[2000] pt-4 pb-2" style={{
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform'
        }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[var(--shadow-sm)] px-3 sm:px-6 py-2 sm:py-4 rounded-[var(--radius-2xl)]" style={{
                    transform: 'translate3d(0, 0, 0)'
                }}>
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                        <Link
                            href={isPremiumMode ? '/premium' : '/'}
                            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer min-w-0"
                            onClick={onReset}
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icon.png"
                                    alt={siteConfig.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <h1 className="text-lg sm:text-2xl font-bold text-[var(--text-color)] truncate">{siteConfig.name}</h1>
                                <p className="text-xs text-[var(--text-color-secondary)] hidden sm:block truncate">{siteConfig.description}</p>
                            </div>
                        </Link>

                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            {/* --- 已删除 GitHub 按钮 --- */}
                            
                            {/* --- 已删除 设置按钮 --- */}

                            {/* 只保留了主题切换按钮 */}
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
