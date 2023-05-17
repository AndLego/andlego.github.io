import React from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
    const imageRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    img.src = img.dataset.src!;
                    observer.unobserve(img);
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return <img ref={imageRef} data-src={src} alt={alt} />;
};

export default LazyImage;
