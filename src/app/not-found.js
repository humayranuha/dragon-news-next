import LoadingAnimation from '@/components/LoadingAnimation';
import NotFoundAnimation from '@/components/NotFoundAnimation';
import { Link } from '@heroui/react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-center">
                {/* <LoadingAnimation /> */}
                <NotFoundAnimation />
            </div>
            <div className="mt-8">
                <Link href="/">
                    <button className='btn bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors'>
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
}