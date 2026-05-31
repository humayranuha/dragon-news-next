import LoadingAnimation from '@/components/LoadingAnimation';
import NotFoundAnimation from '@/components/NotFoundAnimation';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <LoadingAnimation />
            <NotFoundAnimation />
        </div>
    );
}