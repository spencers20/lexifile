"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ImageIcon, X } from "lucide-react"
import {Badge} from "@/components/ui/badge"

interface VisualsModalProps {
  visuals: string[] // Assuming visuals is an array of image URLs
}

export function VisualsModal({ visuals }: VisualsModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showVisuals, setShowVisuals] = useState(false);

  if (!visuals || visuals.length === 0) {
    return null
  }
  return (
    <>
      {/* Trigger button */}
      <Button
        variant="outline"
        size="sm"
        className="flex items-center space-x-2 text-xs sm:text-sm bg-transparent"
        onClick={() => setShowVisuals(true)}
      >
        <Badge className="flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-[10px] sm:text-xs font-medium shadow-sm border border-blue-300">
          <ImageIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span>View Visualizations ({visuals.length})</span>
        </Badge>
      </Button>

      {/* Fullscreen image grid */}
      {showVisuals && (
        <div className="fixed inset-0 z-50 bg-black/90 dark:bg-black/90 overflow-y-auto p-4 flex flex-col gap-4">
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white hover:bg-white/70 text-black dark:text-white"
              onClick={() => setShowVisuals(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div
            className={`grid gap-6 justify-center ${
              visuals.length === 1
                ? "grid-cols-1 place-items-center"
                : visuals.length <= 4
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visuals.map((visual, index) => (
              <img
                key={index}
                src={visual || "/placeholder.svg"}
                alt={`Generated visual ${index + 1}`}
                // className="w-full max-w-md object-contain rounded-xl border border-gray-200 shadow-sm"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
// }



  // return (
  //   <>
  //     <Dialog>
  //       <DialogTrigger asChild>
  //         <Button variant="outline" size="sm" className="flex items-center space-x-2 text-xs sm:text-sm bg-transparent">
  //           <Badge
  //           className="flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-[10px] sm:text-xs font-medium shadow-sm border border-blue-300"
  //           >
  //           <ImageIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  //           <span>View Visualizations ({visuals.length})</span>
  //           </Badge>
  //         </Button>
  //       </DialogTrigger>
  //       <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
  //         <DialogHeader>
  //           <DialogTitle>Generated Images</DialogTitle>
  //         </DialogHeader>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  //           {visuals.map((visual, index) => (
  //             <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedImage(visual)}>
  //               <img
  //                 src={visual || "/placeholder.svg"}
  //                 alt={`Generated visual ${index + 1}`}
  //                 className="w-full h-48 object-cover rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
  //               />
  //               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg flex items-center justify-center">
  //                 <div className="opacity-0 group-hover:opacity-100 transition-opacity">
  //                   <div className="bg-white rounded-full p-2">
  //                     <ImageIcon className="h-4 w-4 text-gray-600" />
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </DialogContent>
  //     </Dialog>

  //     {/* Full-size image modal */}
  //     {selectedImage && (
  //       <div
  //         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  //         onClick={() => setSelectedImage(null)}
  //       >
  //         <div className="relative max-w-full max-h-full">
  //           <Button
  //             variant="ghost"
  //             size="sm"
  //             className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white z-10"
  //             onClick={() => setSelectedImage(null)}
  //           >
  //             <X className="h-4 w-4" />
  //           </Button>
  //           <img
  //             src={selectedImage || "/placeholder.svg"}
  //             alt="Full size view"
  //             className="max-w-full max-h-full object-contain rounded-lg"
  //             onClick={(e) => e.stopPropagation()}
  //           />
  //         </div>
  //       </div>
  //     )}
  //   </>
  // )
}
