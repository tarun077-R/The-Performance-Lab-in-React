import { useState } from "react";
import "../styles/SkeletonImage.css";

/**
 * Image with a built-in skeleton loader.
 *
 * - variant="cover"  → wrapper fills its parent (use where the img
 *   was width/height 100%, e.g. .smart-image, .footer-image)
 * - variant="contain" → wrapper hugs the img (use for fixed-size
 *   logos, e.g. .partner-logo)
 * - tone="dark" | "light" → shimmer palette matching the section bg
 */
const SkeletonImage = ({
    src,
    alt = "",
    tone = "dark",
    variant = "cover",
    className = "",
    ...imgProps
}) => {
    const [loaded, setLoaded] = useState(false);

    /* Cached images can finish before React attaches onLoad. */
    const attachRef = (node) => {
        if (node && node.complete && node.naturalWidth > 0) {
            setLoaded(true);
        }
    };

    return (
        <div
            className={[
                "skeleton-image",
                variant,
                loaded ? "loaded" : "",
            ]
                .join(" ")
                .trim()}
        >
            {!loaded && (
                <span
                    className={`skeleton-shimmer ${tone}`}
                    aria-hidden="true"
                />
            )}

            <img
                ref={attachRef}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
                {...imgProps}
            />
        </div>
    );
};

export default SkeletonImage;
