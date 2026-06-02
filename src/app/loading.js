import LoadingAnimation from '@/components/LoadingAnimation';
import NotFoundAnimation from '@/components/NotFoundAnimation';


export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-center">
                <LoadingAnimation />
                {/* <NotFoundAnimation /> */}
            </div>
        </div>
    );
}