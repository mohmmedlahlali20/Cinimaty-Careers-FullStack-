import React, { forwardRef } from 'react'

const Avatar = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    />
  )
})
Avatar.displayName = "Avatar"

const AvatarImage = forwardRef(({ className, src, alt = "", ...props }, ref) => {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`aspect-square h-full w-full ${className}`}
      {...props}
    />
  )
})
AvatarImage.displayName = "AvatarImage"

const AvatarFallback =forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 ${className}`}
      {...props}
    />
  )
})
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }

