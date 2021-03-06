import * as mongoose from 'mongoose';
import { IPublishedContentDocument, IPublishedContent } from '../../content/content.model';
import { IMediaVersion, IMediaVersionDocument, MediaVersionSchema, cmsMediaVersion } from './media-version.model';

export interface IPublishedMedia extends IMediaVersion, IPublishedContent { }

export interface IPublishedMediaDocument extends IPublishedMedia, IMediaVersionDocument, IPublishedContentDocument { }
export const cmsPublishedMedia = 'cms_PublishedMedia';

export const PublishedMediaSchema = new mongoose.Schema({
    ...MediaVersionSchema.obj,
    contentVersionId: { type: mongoose.Schema.Types.ObjectId, ref: cmsMediaVersion, required: true },

}, { timestamps: true });

export const PublishedMediaModel: mongoose.Model<IPublishedMediaDocument> = mongoose.model<IPublishedMediaDocument>(cmsPublishedMedia, PublishedMediaSchema);
