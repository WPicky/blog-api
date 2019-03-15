import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from '../../entity/note.entity';

// DTO
import { NoteDto } from '../../dto/note.dto';


@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Get()
    findAll(): Promise<NoteEntity[]> {
        return this.noteService.findAll();
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<NoteDto> {
        return await this.noteService.findById(params.id);
    }

    @Post()
    async create(@Body() note: NoteDto): Promise<NoteDto> {
        return await this.noteService.insert(note) as NoteDto;
    }

    @Put(':id')
    async update(@Body() updatedNote: NoteDto, @Param() params): Promise<NoteDto> {
        const oldNote = await this.noteService.findById(params.id);
        return await this.noteService.update(oldNote, updatedNote);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.noteService.delete(params.id);
    }

}
