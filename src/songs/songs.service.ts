import { Injectable, Param } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {

  readonly db: PrismaService;

  constructor(db: PrismaService){
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return 'This action adds a new song';
  }

  findAll() {
    return this.db.songs.findMany();
  }

  findOne(id: number) {
    //return this.songs.find(song => song.id == id);
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    /*const index = this.songs.findIndex(song => song.id == id);
    if(index == -1) {
      return false;
    }
    this.songs.splice(index, 1);*/
    return true;
  }

  findFree(){
    const this.db.songs.findMany()
  }
}
