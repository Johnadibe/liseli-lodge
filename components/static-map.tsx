import { MapPin } from "lucide-react"

interface StaticMapProps {
    latitude: number
    longitude: number
    zoom?: number
    width?: number
    height?: number
}

export function StaticMap({ latitude, longitude, zoom = 14, width = 600, height = 450 }: StaticMapProps) {
    // This would normally use a service like Google Static Maps API or Mapbox Static Images API
    // Since we don't have API keys, we'll use a placeholder with the location information

    return (
        <div className="relative w-full h-[450px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Liseli Lodge Location</h3>
                <p className="text-muted-foreground mb-4">
                    We're located in a peaceful suburb of Mongu, Western Province, Zambia.
                </p>
                <div className="text-sm text-muted-foreground">
                    <p>
                        Coordinates: {latitude}, {longitude}
                    </p>
                </div>
            </div>
        </div>
    )
}
