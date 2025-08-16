import { forwardRef, ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, width, height, priority, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    )
  }
)

Image.displayName = 'Image'
