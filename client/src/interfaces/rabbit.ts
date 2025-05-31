export interface BunnyMedia {
  mp4: string;
  webm: string;
  poster: string;
}

export interface BunnyResponse {
  thisServed: number;
  totalServed: number;
  id: string; 
  media: BunnyMedia;
  source: string;
}