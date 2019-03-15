import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Note } from './entity/note.entity';
import { NoteDto } from './dto/note.dto';


@Injectable()
export class NoteService {
    constructor(
        @InjectRepository( Note)
        private readonly noteRepository: Repository<Note>,
    ) {}

    async findAll(): Promise< Note[]> {
        return await this.noteRepository.find();
    }

    async findById(id: number): Promise<Note> {
        try {
            return await this.noteRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    // async findByArticleId(articleId: number): Promise<Note> {
    //     try {
    //         return await this.noteRepository.find({ id: articleId });
    //     } catch (err) {
    //         return err;
    //     }
    // }

    // async findByUserId(id: number): Promise< Note> {
    //     try {
    //         return await this.noteRepository.findOne(id);
    //     } catch (err) {
    //         return err;
    //     }
    // }

    async insert(note: NoteDto): Promise< Note> {
        const newNote = new  Note();

        Object.keys(note).forEach((key) => {
            newNote[key] = note[key];
        });

        try {
            return await this.noteRepository.save(newNote);
        } catch (err) {
            return err;
        }
    }

    async update(oldNote:  Note, updated_values: NoteDto): Promise< Note> {
        const updatedNote = oldNote;

        Object.keys(updated_values).forEach((key) => {
            updatedNote[key] = updated_values[key];
        });

        try {
            return await this.noteRepository.save(updatedNote);
        } catch (err) {
            return err;
        }

    }

    async delete(id: number) {
        try {
            return await this.noteRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


}
