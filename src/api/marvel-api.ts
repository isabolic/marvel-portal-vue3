/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ComicList {
  /**
   * The number of total available issues in this list. Will always be greater than or equal to the "returned" value.
   * @format int32
   */
  available?: number;
  /**
   * The number of issues returned in this collection (up to 20).
   * @format int32
   */
  returned?: number;
  /** The path to the full list of issues in this collection. */
  collectionURI?: string;
  /** The list of returned issues in this collection. */
  items?: ComicSummary[];
}

export interface EventList {
  /**
   * The number of total available events in this list. Will always be greater than or equal to the "returned" value.
   * @format int32
   */
  available?: number;
  /**
   * The number of events returned in this collection (up to 20).
   * @format int32
   */
  returned?: number;
  /** The path to the full list of events in this collection. */
  collectionURI?: string;
  /** The list of returned events in this collection. */
  items?: EventSummary[];
}

export interface CreatorList {
  /**
   * The number of total available creators in this list. Will always be greater than or equal to the "returned" value.
   * @format int32
   */
  available?: number;
  /**
   * The number of creators returned in this collection (up to 20).
   * @format int32
   */
  returned?: number;
  /** The path to the full list of creators in this collection. */
  collectionURI?: string;
  /** The list of returned creators in this collection. */
  items?: CreatorSummary[];
}

export interface CharacterList {
  /**
   * The number of total available characters in this list. Will always be greater than or equal to the "returned" value.
   * @format int32
   */
  available?: number;
  /**
   * The number of characters returned in this collection (up to 20).
   * @format int32
   */
  returned?: number;
  /** The path to the full list of characters in this collection. */
  collectionURI?: string;
  /** The list of returned characters in this collection. */
  items?: CharacterSummary[];
}

export interface SeriesList {
  /**
   * The number of total available series in this list. Will always be greater than or equal to the "returned" value.
   * @format int32
   */
  available?: number;
  /**
   * The number of series returned in this collection (up to 20).
   * @format int32
   */
  returned?: number;
  /** The path to the full list of series in this collection. */
  collectionURI?: string;
  /** The list of returned series in this collection. */
  items?: SeriesSummary[];
}

export interface StoryList {
  /**
   * The number of total available stories in this list. Will always be greater than or equal to the "returned" value.
   * @format int32
   */
  available?: number;
  /**
   * The number of stories returned in this collection (up to 20).
   * @format int32
   */
  returned?: number;
  /** The path to the full list of stories in this collection. */
  collectionURI?: string;
  /** The list of returned stories in this collection. */
  items?: StorySummary[];
}

export interface CharacterSummary {
  /** The path to the individual character resource. */
  resourceURI?: string;
  /** The full name of the character. */
  name?: string;
  /** The role of the creator in the parent entity. */
  role?: string;
}

export interface EventSummary {
  /** The path to the individual event resource. */
  resourceURI?: string;
  /** The name of the event. */
  name?: string;
}

export interface SeriesSummary {
  /** The path to the individual series resource. */
  resourceURI?: string;
  /** The canonical name of the series. */
  name?: string;
}

export interface ComicSummary {
  /** The path to the individual comic resource. */
  resourceURI?: string;
  /** The canonical name of the comic. */
  name?: string;
}

export interface Url {
  /** A text identifier for the URL. */
  type?: string;
  /** A full URL (including scheme, domain, and path). */
  url?: string;
}

export interface CreatorSummary {
  /** The path to the individual creator resource. */
  resourceURI?: string;
  /** The full name of the creator. */
  name?: string;
  /** The role of the creator in the parent entity. */
  role?: string;
}

export interface StorySummary {
  /** The path to the individual story resource. */
  resourceURI?: string;
  /** The canonical name of the story. */
  name?: string;
  /** The type of the story (interior or cover). */
  type?: string;
}

export interface Image {
  /** The directory path of to the image. */
  path?: string;
  /** The file extension for the image. */
  extension?: string;
}

export interface ComicDate {
  /** A description of the date (e.g. onsale date, FOC date). */
  type?: string;
  /**
   * The date.
   * @format date
   */
  date?: string;
}

export interface CharacterDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   * @format int32
   */
  offset?: number;
  /**
   * The requested result limit.
   * @format int32
   */
  limit?: number;
  /**
   * The total number of resources available given the current filter set.
   * @format int32
   */
  total?: number;
  /**
   * The total number of results returned by this call.
   * @format int32
   */
  count?: number;
  /** The list of characters returned by the call. */
  results?: Character[];
}

export interface EventDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   * @format int32
   */
  offset?: number;
  /**
   * The requested result limit.
   * @format int32
   */
  limit?: number;
  /**
   * The total number of resources available given the current filter set.
   * @format int32
   */
  total?: number;
  /**
   * The total number of results returned by this call.
   * @format int32
   */
  count?: number;
  /** The list of events returned by the call */
  results?: Event[];
}

export interface ComicPrice {
  /** A description of the price (e.g. print price, digital price). */
  type?: string;
  /**
   * The price (all prices in USD).
   * @format float
   */
  price?: number;
}

export interface EventDataWrapper {
  /**
   * The HTTP status code of the returned result.
   * @format int32
   */
  code?: number;
  /** A string description of the call status. */
  status?: string;
  /** The copyright notice for the returned result. */
  copyright?: string;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: string;
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: string;
  /** The results returned by the call. */
  data?: EventDataContainer;
  /** A digest value of the content returned by the call. */
  etag?: string;
}

export interface Creator {
  /**
   * The unique ID of the creator resource.
   * @format int32
   */
  id?: number;
  /** The first name of the creator. */
  firstName?: string;
  /** The middle name of the creator. */
  middleName?: string;
  /** The last name of the creator. */
  lastName?: string;
  /** The suffix or honorific for the creator. */
  suffix?: string;
  /** The full name of the creator (a space-separated concatenation of the above four fields). */
  fullName?: string;
  /**
   * The date the resource was most recently modified.
   * @format date
   */
  modified?: string;
  /** The canonical URL identifier for this resource. */
  resourceURI?: string;
  /** A set of public web site URLs for the resource. */
  urls?: Url[];
  /** The representative image for this creator. */
  thumbnail?: Image;
  /** A resource list containing the series which feature work by this creator. */
  series?: SeriesList;
  /** A resource list containing the stories which feature work by this creator. */
  stories?: StoryList;
  /** A resource list containing the comics which feature work by this creator. */
  comics?: ComicList;
  /** A resource list containing the events which feature work by this creator. */
  events?: EventList;
}

export interface Event {
  /**
   * The unique ID of the event resource.
   * @format int32
   */
  id?: number;
  /** The title of the event. */
  title?: string;
  /** A description of the event. */
  description?: string;
  /** The canonical URL identifier for this resource. */
  resourceURI?: string;
  /** A set of public web site URLs for the event. */
  urls?: Url[];
  /**
   * The date the resource was most recently modified.
   * @format date
   */
  modified?: string;
  /**
   * The date of publication of the first issue in this event.
   * @format date
   */
  start?: string;
  /**
   * The date of publication of the last issue in this event.
   * @format date
   */
  end?: string;
  /** The representative image for this event. */
  thumbnail?: Image;
  /** A resource list containing the comics in this event. */
  comics?: ComicList;
  /** A resource list containing the stories in this event. */
  stories?: StoryList;
  /** A resource list containing the series in this event. */
  series?: SeriesList;
  /** A resource list containing the characters which appear in this event. */
  characters?: CharacterList;
  /** A resource list containing creators whose work appears in this event. */
  creators?: CreatorList;
  /** A summary representation of the event which follows this event. */
  next?: EventSummary;
  /** A summary representation of the event which preceded this event. */
  previous?: EventSummary;
}

export interface ComicDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   * @format int32
   */
  offset?: number;
  /**
   * The requested result limit.
   * @format int32
   */
  limit?: number;
  /**
   * The total number of resources available given the current filter set.
   * @format int32
   */
  total?: number;
  /**
   * The total number of results returned by this call.
   * @format int32
   */
  count?: number;
  /** The list of comics returned by the call */
  results?: Comic[];
}

export interface TextObject {
  /** The canonical type of the text object (e.g. solicit text, preview text, etc.). */
  type?: string;
  /** The IETF language tag denoting the language the text object is written in. */
  language?: string;
  /** The text. */
  text?: string;
}

export interface CreatorDataWrapper {
  /**
   * The HTTP status code of the returned result.
   * @format int32
   */
  code?: number;
  /** A string description of the call status. */
  status?: string;
  /** The copyright notice for the returned result. */
  copyright?: string;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: string;
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: string;
  /** The results returned by the call. */
  data?: CreatorDataContainer;
  /** A digest value of the content returned by the call. */
  etag?: string;
}

export interface StoryDataWrapper {
  /**
   * The HTTP status code of the returned result.
   * @format int32
   */
  code?: number;
  /** A string description of the call status. */
  status?: string;
  /** The copyright notice for the returned result. */
  copyright?: string;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: string;
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: string;
  /** The results returned by the call. */
  data?: StoryDataContainer;
  /** A digest value of the content returned by the call. */
  etag?: string;
}

export interface Character {
  /**
   * The unique ID of the character resource.
   * @format int32
   */
  id?: number;
  /** The name of the character. */
  name?: string;
  /** A short bio or description of the character. */
  description?: string;
  /**
   * The date the resource was most recently modified.
   * @format date
   */
  modified?: string;
  /** The canonical URL identifier for this resource. */
  resourceURI?: string;
  /** A set of public web site URLs for the resource. */
  urls?: Url[];
  /** The representative image for this character. */
  thumbnail?: Image;
  /** A resource list containing comics which feature this character. */
  comics?: ComicList;
  /** A resource list of stories in which this character appears. */
  stories?: StoryList;
  /** A resource list of events in which this character appears. */
  events?: EventList;
  /** A resource list of series in which this character appears. */
  series?: SeriesList;
}

export interface CharacterDataWrapper {
  /**
   * The HTTP status code of the returned result.
   * @format int32
   */
  code?: number;
  /** A string description of the call status. */
  status?: string;
  /** The copyright notice for the returned result. */
  copyright?: string;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: string;
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: string;
  /** The results returned by the call. */
  data?: CharacterDataContainer;
  /** A digest value of the content returned by the call. */
  etag?: string;
}

export interface ComicDataWrapper {
  /**
   * The HTTP status code of the returned result.
   * @format int32
   */
  code?: number;
  /** A string description of the call status. */
  status?: string;
  /** The copyright notice for the returned result. */
  copyright?: string;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: string;
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: string;
  /** The results returned by the call. */
  data?: ComicDataContainer;
  /** A digest value of the content returned by the call. */
  etag?: string;
}

export interface Series {
  /**
   * The unique ID of the series resource.
   * @format int32
   */
  id?: number;
  /** The canonical title of the series. */
  title?: string;
  /** A description of the series. */
  description?: string;
  /** The canonical URL identifier for this resource. */
  resourceURI?: string;
  /** A set of public web site URLs for the resource. */
  urls?: Url[];
  /**
   * The first year of publication for the series.
   * @format int32
   */
  startYear?: number;
  /**
   * The last year of publication for the series (conventionally, 2099 for ongoing series) .
   * @format int32
   */
  endYear?: number;
  /** The age-appropriateness rating for the series. */
  rating?: string;
  /**
   * The date the resource was most recently modified.
   * @format date
   */
  modified?: string;
  /** The representative image for this series. */
  thumbnail?: Image;
  /** A resource list containing comics in this series. */
  comics?: ComicList;
  /** A resource list containing stories which occur in comics in this series. */
  stories?: StoryList;
  /** A resource list containing events which take place in comics in this series. */
  events?: EventList;
  /** A resource list containing characters which appear in comics in this series. */
  characters?: CharacterList;
  /** A resource list of creators whose work appears in comics in this series. */
  creators?: CreatorList;
  /** A summary representation of the series which follows this series. */
  next?: SeriesSummary;
  /** A summary representation of the series which preceded this series. */
  previous?: SeriesSummary;
}

export interface SeriesDataWrapper {
  /**
   * The HTTP status code of the returned result.
   * @format int32
   */
  code?: number;
  /** A string description of the call status. */
  status?: string;
  /** The copyright notice for the returned result. */
  copyright?: string;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: string;
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: string;
  /** The results returned by the call. */
  data?: SeriesDataContainer;
  /** A digest value of the content returned by the call. */
  etag?: string;
}

export interface SeriesDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   * @format int32
   */
  offset?: number;
  /**
   * The requested result limit.
   * @format int32
   */
  limit?: number;
  /**
   * The total number of resources available given the current filter set.
   * @format int32
   */
  total?: number;
  /**
   * The total number of results returned by this call.
   * @format int32
   */
  count?: number;
  /** The list of series returned by the call */
  results?: Series[];
}

export interface StoryDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   * @format int32
   */
  offset?: number;
  /**
   * The requested result limit.
   * @format int32
   */
  limit?: number;
  /**
   * The total number of resources available given the current filter set.
   * @format int32
   */
  total?: number;
  /**
   * The total number of results returned by this call.
   * @format int32
   */
  count?: number;
  /** The list of stories returned by the call */
  results?: Story[];
}

export interface Comic {
  /**
   * The unique ID of the comic resource.
   * @format int32
   */
  id?: number;
  /**
   * The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.
   * @format int32
   */
  digitalId?: number;
  /** The canonical title of the comic. */
  title?: string;
  /**
   * The number of the issue in the series (will generally be 0 for collection formats).
   * @format double
   */
  issueNumber?: number;
  /** If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant. */
  variantDescription?: string;
  /** The preferred description of the comic. */
  description?: string;
  /**
   * The date the resource was most recently modified.
   * @format date
   */
  modified?: string;
  /** The ISBN for the comic (generally only populated for collection formats). */
  isbn?: string;
  /** The UPC barcode number for the comic (generally only populated for periodical formats). */
  upc?: string;
  /** The Diamond code for the comic. */
  diamondCode?: string;
  /** The EAN barcode for the comic. */
  ean?: string;
  /** The ISSN barcode for the comic. */
  issn?: string;
  /** The publication format of the comic e.g. comic, hardcover, trade paperback. */
  format?: string;
  /**
   * The number of story pages in the comic.
   * @format int32
   */
  pageCount?: number;
  /** A set of descriptive text blurbs for the comic. */
  textObjects?: TextObject[];
  /** The canonical URL identifier for this resource. */
  resourceURI?: string;
  /** A set of public web site URLs for the resource. */
  urls?: Url[];
  /** A summary representation of the series to which this comic belongs. */
  series?: SeriesSummary;
  /** A list of variant issues for this comic (includes the "original" issue if the current issue is a variant). */
  variants?: ComicSummary[];
  /** A list of collections which include this comic (will generally be empty if the comic's format is a collection). */
  collections?: ComicSummary[];
  /** A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine"). */
  collectedIssues?: ComicSummary[];
  /** A list of key dates for this comic. */
  dates?: ComicDate[];
  /** A list of prices for this comic. */
  prices?: ComicPrice[];
  /** The representative image for this comic. */
  thumbnail?: Image;
  /** A list of promotional images associated with this comic. */
  images?: Image[];
  /** A resource list containing the creators associated with this comic. */
  creators?: CreatorList;
  /** A resource list containing the characters which appear in this comic. */
  characters?: CharacterList;
  /** A resource list containing the stories which appear in this comic. */
  stories?: StoryList;
  /** A resource list containing the events in which this comic appears. */
  events?: EventList;
}

export interface CreatorDataContainer {
  /**
   * The requested offset (number of skipped results) of the call.
   * @format int32
   */
  offset?: number;
  /**
   * The requested result limit.
   * @format int32
   */
  limit?: number;
  /**
   * The total number of resources available given the current filter set.
   * @format int32
   */
  total?: number;
  /**
   * The total number of results returned by this call.
   * @format int32
   */
  count?: number;
  /** The list of creators returned by the call. */
  results?: Creator[];
}

export interface Story {
  /**
   * The unique ID of the story resource.
   * @format int32
   */
  id?: number;
  /** The story title. */
  title?: string;
  /** A short description of the story. */
  description?: string;
  /** The canonical URL identifier for this resource.  */
  resourceURI?: string;
  /** The story type e.g. interior story, cover, text story. */
  type?: string;
  /**
   * The date the resource was most recently modified.
   * @format date
   */
  modified?: string;
  /** The representative image for this story. */
  thumbnail?: Image;
  /** A resource list containing comics in which this story takes place. */
  comics?: ComicList;
  /** A resource list containing series in which this story appears. */
  series?: SeriesList;
  /** A resource list of the events in which this story appears. */
  events?: EventList;
  /** A resource list of characters which appear in this story. */
  characters?: CharacterList;
  /** A resource list of creators who worked on this story. */
  creators?: CreatorList;
  /** A summary representation of the issue in which this story was originally published. */
  originalissue?: ComicSummary;
}

import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type HeadersDefaults,
  type ResponseType,
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://gateway.marvel.com" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title gateway.marvel.com
 * @version Cable
 * @baseUrl http://gateway.marvel.com
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description Fetches lists of comic characters with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection
     * @summary Fetches lists of characters.
     * @request GET:/v1/public/characters
     */
    getCreatorCollection: (
      query?: {
        /** Return only characters matching the specified full character name (e.g. Spider-Man). */
        name?: string;
        /** Return characters with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only characters which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only characters which appear in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only characters which appear the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only characters which appear in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only characters which appear the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CharacterDataWrapper, any>({
        path: `/v1/public/characters`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This method fetches a single character resource.  It is the canonical URI for any character resource provided by the API.
     *
     * @tags public
     * @name GetCharacterIndividual
     * @summary Fetches a single character by id.
     * @request GET:/v1/public/characters/{characterId}
     */
    getCharacterIndividual: (characterId: number, params: RequestParams = {}) =>
      this.request<CharacterDataWrapper, any>({
        path: `/v1/public/characters/${characterId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Fetches lists of comics containing a specific character, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicsCharacterCollection
     * @summary Fetches lists of comics filtered by a character id.
     * @request GET:/v1/public/characters/{characterId}/comics
     */
    getComicsCharacterCollection: (
      characterId: number,
      query?: {
        /** Filter by the issue format (e.g. comic, digital comic, hardcover). */
        format?: string;
        /** Filter by the issue format type (comic or collection). */
        formatType?: string;
        /** Exclude variant comics from the result set. */
        noVariants?: boolean;
        /** Return comics within a predefined date range. */
        dateDescriptor?: string;
        /** Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. */
        dateRange?: number[];
        /** Return only issues in series whose title matches the input. */
        title?: string;
        /** Return only issues in series whose title starts with the input. */
        titleStartsWith?: string;
        /**
         * Return only issues in series whose start year matches the input.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only issues in series whose issue number matches the input.
         * @format int32
         */
        issueNumber?: number;
        /** Filter by diamond code. */
        diamondCode?: string;
        /**
         * Filter by digital comic id.
         * @format int32
         */
        digitalId?: number;
        /** Filter by UPC. */
        upc?: string;
        /** Filter by ISBN. */
        isbn?: string;
        /** Filter by EAN. */
        ean?: string;
        /** Filter by ISSN. */
        issn?: string;
        /** Include only results which are available digitally. */
        hasDigitalIssue?: boolean;
        /**
         * Return only comics which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only comics which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only comics which take place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only comics which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). */
        sharedAppearances?: number[];
        /** Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). */
        collaborators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/characters/${characterId}/comics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of events in which a specific character appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCharacterEventsCollection
     * @summary Fetches lists of events filtered by a character id.
     * @request GET:/v1/public/characters/{characterId}/events
     */
    getCharacterEventsCollection: (
      characterId: number,
      query?: {
        /** Filter the event list by name. */
        name?: string;
        /** Return events with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only events which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only events which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only events which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only events which take place in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only events which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/characters/${characterId}/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic series in which a specific character appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCharacterSeriesCollection
     * @summary Fetches lists of series filtered by a character id.
     * @request GET:/v1/public/characters/{characterId}/series
     */
    getCharacterSeriesCollection: (
      characterId: number,
      query?: {
        /** Filter by series title. */
        title?: string;
        /** Return series with titles that begin with the specified string (e.g. Sp). */
        titleStartsWith?: string;
        /**
         * Return only series matching the specified start year.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only series which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only series which contain the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only series which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only series which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Filter the series by publication frequency type. */
        seriesType?: string;
        /** Return only series containing one or more comics with the specified format. */
        contains?: string[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SeriesDataWrapper, any>({
        path: `/v1/public/characters/${characterId}/series`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic stories  featuring a specific character with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCharacterStoryCollection
     * @summary Fetches lists of stories filtered by a character id.
     * @request GET:/v1/public/characters/{characterId}/stories
     */
    getCharacterStoryCollection: (
      characterId: number,
      query?: {
        /**
         * Return only stories which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only stories contained in the specified (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only stories contained the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only stories which take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/characters/${characterId}/stories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comics with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicsCollection
     * @summary Fetches lists of comics.
     * @request GET:/v1/public/comics
     */
    getComicsCollection: (
      query?: {
        /** Filter by the issue format (e.g. comic, digital comic, hardcover). */
        format?: string;
        /** Filter by the issue format type (comic or collection). */
        formatType?: string;
        /** Exclude variants (alternate covers, secondary printings, director's cuts, etc.) from the result set. */
        noVariants?: boolean;
        /** Return comics within a predefined date range. */
        dateDescriptor?: string;
        /** Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. */
        dateRange?: number[];
        /** Return only issues in series whose title matches the input. */
        title?: string;
        /** Return only issues in series whose title starts with the input. */
        titleStartsWith?: string;
        /**
         * Return only issues in series whose start year matches the input.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only issues in series whose issue number matches the input.
         * @format int32
         */
        issueNumber?: number;
        /** Filter by diamond code. */
        diamondCode?: string;
        /**
         * Filter by digital comic id.
         * @format int32
         */
        digitalId?: number;
        /** Filter by UPC. */
        upc?: string;
        /** Filter by ISBN. */
        isbn?: string;
        /** Filter by EAN. */
        ean?: string;
        /** Filter by ISSN. */
        issn?: string;
        /** Include only results which are available digitally. */
        hasDigitalIssue?: boolean;
        /**
         * Return only comics which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only comics which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only comics which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only comics which take place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only comics which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). Accepts a comma-separated list of ids. */
        sharedAppearances?: number[];
        /** Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). Accepts a comma-separated list of ids. */
        collaborators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/comics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This method fetches a single comic resource.  It is the canonical URI for any comic resource provided by the API.
     *
     * @tags public
     * @name GetComicIndividual
     * @summary Fetches a single comic by id.
     * @request GET:/v1/public/comics/{comicId}
     */
    getComicIndividual: (comicId: number, params: RequestParams = {}) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/comics/${comicId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Fetches lists of characters which appear in a specific comic with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicCharacterCollection
     * @summary Fetches lists of characters filtered by a comic id.
     * @request GET:/v1/public/comics/{comicId}/characters
     */
    getComicCharacterCollection: (
      comicId: number,
      query?: {
        /** Return only characters matching the specified full character name (e.g. Spider-Man). */
        name?: string;
        /** Return characters with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only characters which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only characters which appear the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only characters which appear the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CharacterDataWrapper, any>({
        path: `/v1/public/comics/${comicId}/characters`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic creators whose work appears in a specific comic, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection2
     * @summary Fetches lists of creators filtered by a comic id.
     * @request GET:/v1/public/comics/{comicId}/creators
     * @originalName getCreatorCollection
     * @duplicate
     */
    getCreatorCollection2: (
      comicId: number,
      query?: {
        /** Filter by creator first name (e.g. brian). */
        firstName?: string;
        /** Filter by creator middle name (e.g. Michael). */
        middleName?: string;
        /** Filter by creator last name (e.g. Bendis). */
        lastName?: string;
        /** Filter by suffix or honorific (e.g. Jr., Sr.). */
        suffix?: string;
        /** Filter by creator names that match critera (e.g. B, St L). */
        nameStartsWith?: string;
        /** Filter by creator first names that match critera (e.g. B, St L). */
        firstNameStartsWith?: string;
        /** Filter by creator middle names that match critera (e.g. Mi). */
        middleNameStartsWith?: string;
        /** Filter by creator last names that match critera (e.g. Ben). */
        lastNameStartsWith?: string;
        /**
         * Return only creators which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only creators who worked on the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only creators who worked on the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatorDataWrapper, any>({
        path: `/v1/public/comics/${comicId}/creators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of events in which a specific comic appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetIssueEventsCollection
     * @summary Fetches lists of events filtered by a comic id.
     * @request GET:/v1/public/comics/{comicId}/events
     */
    getIssueEventsCollection: (
      comicId: number,
      query?: {
        /** Filter the event list by name. */
        name?: string;
        /** Return events with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only events which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only events which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only events which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only events which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only events which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/comics/${comicId}/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic stories in a specific comic issue, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicStoryCollection
     * @summary Fetches lists of stories filtered by a comic id.
     * @request GET:/v1/public/comics/{comicId}/stories
     */
    getComicStoryCollection: (
      comicId: number,
      query?: {
        /**
         * Return only stories which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only stories contained the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only stories which take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only stories which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/comics/${comicId}/stories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic creators with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection3
     * @summary Fetches lists of creators.
     * @request GET:/v1/public/creators
     * @originalName getCreatorCollection
     * @duplicate
     */
    getCreatorCollection3: (
      query?: {
        /** Filter by creator first name (e.g. Brian). */
        firstName?: string;
        /** Filter by creator middle name (e.g. Michael). */
        middleName?: string;
        /** Filter by creator last name (e.g. Bendis). */
        lastName?: string;
        /** Filter by suffix or honorific (e.g. Jr., Sr.). */
        suffix?: string;
        /** Filter by creator names that match critera (e.g. B, St L). */
        nameStartsWith?: string;
        /** Filter by creator first names that match critera (e.g. B, St L). */
        firstNameStartsWith?: string;
        /** Filter by creator middle names that match critera (e.g. Mi). */
        middleNameStartsWith?: string;
        /** Filter by creator last names that match critera (e.g. Ben). */
        lastNameStartsWith?: string;
        /**
         * Return only creators which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only creators who worked on the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only creators who worked on the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatorDataWrapper, any>({
        path: `/v1/public/creators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This method fetches a single creator resource.  It is the canonical URI for any creator resource provided by the API.
     *
     * @tags public
     * @name GetCreatorIndividual
     * @summary Fetches a single creator by id.
     * @request GET:/v1/public/creators/{creatorId}
     */
    getCreatorIndividual: (creatorId: number, params: RequestParams = {}) =>
      this.request<CreatorDataWrapper, any>({
        path: `/v1/public/creators/${creatorId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Fetches lists of comics in which the work of a specific creator appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicsCollection2
     * @summary Fetches lists of comics filtered by a creator id.
     * @request GET:/v1/public/creators/{creatorId}/comics
     * @originalName getComicsCollection
     * @duplicate
     */
    getComicsCollection2: (
      creatorId: number,
      query?: {
        /** Filter by the issue format (e.g. comic, digital comic, hardcover). */
        format?: string;
        /** Filter by the issue format type (comic or collection). */
        formatType?: string;
        /** Exclude variant comics from the result set. */
        noVariants?: boolean;
        /** Return comics within a predefined date range. */
        dateDescriptor?: string;
        /** Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. */
        dateRange?: number[];
        /** Return only issues in series whose title matches the input. */
        title?: string;
        /** Return only issues in series whose title starts with the input. */
        titleStartsWith?: string;
        /**
         * Return only issues in series whose start year matches the input.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only issues in series whose issue number matches the input.
         * @format int32
         */
        issueNumber?: number;
        /** Filter by diamond code. */
        diamondCode?: string;
        /**
         * Filter by digital comic id.
         * @format int32
         */
        digitalId?: number;
        /** Filter by UPC. */
        upc?: string;
        /** Filter by ISBN. */
        isbn?: string;
        /** Filter by EAN. */
        ean?: string;
        /** Filter by ISSN. */
        issn?: string;
        /** Include only results which are available digitally. */
        hasDigitalIssue?: boolean[];
        /**
         * Return only comics which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only comics which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only comics which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only comics which take place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only comics which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). */
        sharedAppearances?: number[];
        /** Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). */
        collaborators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/creators/${creatorId}/comics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of events featuring the work of a specific creator with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorEventsCollection
     * @summary Fetches lists of events filtered by a creator id.
     * @request GET:/v1/public/creators/{creatorId}/events
     */
    getCreatorEventsCollection: (
      creatorId: number,
      query?: {
        /** Filter the event list by name. */
        name?: string;
        /** Return events with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only events which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only events which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only events which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only events which take place in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only events which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/creators/${creatorId}/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic series in which a specific creator's work appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorSeriesCollection
     * @summary Fetches lists of series filtered by a creator id.
     * @request GET:/v1/public/creators/{creatorId}/series
     */
    getCreatorSeriesCollection: (
      creatorId: number,
      query?: {
        /** Filter by series title. */
        title?: string;
        /** Return series with titles that begin with the specified string (e.g. Sp). */
        titleStartsWith?: string;
        /**
         * Return only series matching the specified start year.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only series which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only series which contain the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only series which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only series which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Filter the series by publication frequency type. */
        seriesType?: string;
        /** Return only series containing one or more comics with the specified format. */
        contains?: string[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SeriesDataWrapper, any>({
        path: `/v1/public/creators/${creatorId}/series`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic stories by a specific creator with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorStoryCollection
     * @summary Fetches lists of stories filtered by a creator id.
     * @request GET:/v1/public/creators/{creatorId}/stories
     */
    getCreatorStoryCollection: (
      creatorId: number,
      query?: {
        /**
         * Return only stories which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only stories contained in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only stories contained the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only stories which take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only stories which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/creators/${creatorId}/stories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of events with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetEventsCollection
     * @summary Fetches lists of events.
     * @request GET:/v1/public/events
     */
    getEventsCollection: (
      query?: {
        /** Return only events which match the specified name. */
        name?: string;
        /** Return events with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only events which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only events which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only events which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only events which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only events which take place in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only events which take place in the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This method fetches a single event resource.  It is the canonical URI for any event resource provided by the API.
     *
     * @tags public
     * @name GetEventIndividual
     * @summary Fetches a single event by id.
     * @request GET:/v1/public/events/{eventId}
     */
    getEventIndividual: (eventId: number, params: RequestParams = {}) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/events/${eventId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Fetches lists of characters which appear in a specific event, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetEventCharacterCollection
     * @summary Fetches lists of characters filtered by an event id.
     * @request GET:/v1/public/events/{eventId}/characters
     */
    getEventCharacterCollection: (
      eventId: number,
      query?: {
        /** Return only characters matching the specified full character name (e.g. Spider-Man). */
        name?: string;
        /** Return characters with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only characters which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only characters which appear in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only characters which appear the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only characters which appear the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CharacterDataWrapper, any>({
        path: `/v1/public/events/${eventId}/characters`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comics which take place during a specific event, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicsCollection3
     * @summary Fetches lists of comics filtered by an event id.
     * @request GET:/v1/public/events/{eventId}/comics
     * @originalName getComicsCollection
     * @duplicate
     */
    getComicsCollection3: (
      eventId: number,
      query?: {
        /** Filter by the issue format (e.g. comic, digital comic, hardcover). */
        format?: string;
        /** Filter by the issue format type (comic or collection). */
        formatType?: string;
        /** Exclude variant comics from the result set. */
        noVariants?: boolean[];
        /** Return comics within a predefined date range. */
        dateDescriptor?: string[];
        /** Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. */
        dateRange?: number[];
        /** Return only issues in series whose title matches the input. */
        title?: string;
        /** Return only issues in series whose title starts with the input. */
        titleStartsWith?: string;
        /**
         * Return only issues in series whose start year matches the input.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only issues in series whose issue number matches the input.
         * @format int32
         */
        issueNumber?: number;
        /** Filter by diamond code. */
        diamondCode?: string;
        /**
         * Filter by digital comic id.
         * @format int32
         */
        digitalId?: number;
        /** Filter by UPC. */
        upc?: string;
        /** Filter by ISBN. */
        isbn?: string;
        /** Filter by EAN. */
        ean?: string;
        /** Filter by ISSN. */
        issn?: string;
        /** Include only results which are available digitally. */
        hasDigitalIssue?: boolean[];
        /**
         * Return only comics which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only comics which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only comics which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only comics which take place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only comics which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). */
        sharedAppearances?: number[];
        /** Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). */
        collaborators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/events/${eventId}/comics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic creators whose work appears in a specific event, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection4
     * @summary Fetches lists of creators filtered by an event id.
     * @request GET:/v1/public/events/{eventId}/creators
     * @originalName getCreatorCollection
     * @duplicate
     */
    getCreatorCollection4: (
      eventId: number,
      query?: {
        /** Filter by creator first name (e.g. brian). */
        firstName?: string;
        /** Filter by creator middle name (e.g. Michael). */
        middleName?: string;
        /** Filter by creator last name (e.g. Bendis). */
        lastName?: string;
        /** Filter by suffix or honorific (e.g. Jr., Sr.). */
        suffix?: string;
        /** Filter by creator names that match critera (e.g. B, St L). */
        nameStartsWith?: string;
        /** Filter by creator first names that match critera (e.g. B, St L). */
        firstNameStartsWith?: string;
        /** Filter by creator middle names that match critera (e.g. Mi). */
        middleNameStartsWith?: string;
        /** Filter by creator last names that match critera (e.g. Ben). */
        lastNameStartsWith?: string;
        /**
         * Return only creators which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only creators who worked on the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only creators who worked on the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatorDataWrapper, any>({
        path: `/v1/public/events/${eventId}/creators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic series in which a specific event takes place, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetEventSeriesCollection
     * @summary Fetches lists of series filtered by an event id.
     * @request GET:/v1/public/events/{eventId}/series
     */
    getEventSeriesCollection: (
      eventId: number,
      query?: {
        /** Filter by series title. */
        title?: string;
        /** Return series with titles that begin with the specified string (e.g. Sp). */
        titleStartsWith?: string;
        /**
         * Return only series matching the specified start year.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only series which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only series which contain the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only series which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only series which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only series which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Filter the series by publication frequency type. */
        seriesType?: string;
        /** Return only series containing one or more comics with the specified format. */
        contains?: string[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SeriesDataWrapper, any>({
        path: `/v1/public/events/${eventId}/series`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic stories from a specific event, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetEventStoryCollection
     * @summary Fetches lists of stories filtered by an event id.
     * @request GET:/v1/public/events/{eventId}/stories
     */
    getEventStoryCollection: (
      eventId: number,
      query?: {
        /**
         * Return only stories which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only stories contained in the specified (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only stories contained the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only stories which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/events/${eventId}/stories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic series with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetSeriesCollection
     * @summary Fetches lists of series.
     * @request GET:/v1/public/series
     */
    getSeriesCollection: (
      query?: {
        /** Return only series matching the specified title. */
        title?: string;
        /** Return series with titles that begin with the specified string (e.g. Sp). */
        titleStartsWith?: string;
        /**
         * Return only series matching the specified start year.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only series which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only series which contain the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only series which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only series which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only series which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Filter the series by publication frequency type. */
        seriesType?: string;
        /** Return only series containing one or more comics with the specified format. */
        contains?: string[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SeriesDataWrapper, any>({
        path: `/v1/public/series`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This method fetches a single comic series resource.  It is the canonical URI for any comic series resource provided by the API.
     *
     * @tags public
     * @name GetSeriesIndividual
     * @summary Fetches a single comic series by id.
     * @request GET:/v1/public/series/{seriesId}
     */
    getSeriesIndividual: (seriesId: number, params: RequestParams = {}) =>
      this.request<SeriesDataWrapper, any>({
        path: `/v1/public/series/${seriesId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Fetches lists of characters which appear in specific series, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetSeriesCharacterWrapper
     * @summary Fetches lists of characters filtered by a series id.
     * @request GET:/v1/public/series/{seriesId}/characters
     */
    getSeriesCharacterWrapper: (
      seriesId: number,
      query?: {
        /** Return only characters matching the specified full character name (e.g. Spider-Man). */
        name?: string;
        /** Return characters with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only characters which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only characters which appear in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only characters which appear the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CharacterDataWrapper, any>({
        path: `/v1/public/series/${seriesId}/characters`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comics which are published as part of a specific series, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicsCollection4
     * @summary Fetches lists of comics filtered by a series id.
     * @request GET:/v1/public/series/{seriesId}/comics
     * @originalName getComicsCollection
     * @duplicate
     */
    getComicsCollection4: (
      seriesId: number,
      query?: {
        /** Filter by the issue format (e.g. comic, digital comic, hardcover). */
        format?: string;
        /** Filter by the issue format type (comic or collection). */
        formatType?: string;
        /** Exclude variant comics from the result set. */
        noVariants?: boolean[];
        /** Return comics within a predefined date range. */
        dateDescriptor?: string[];
        /** Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. */
        dateRange?: number[];
        /** Return only issues in series whose title matches the input. */
        title?: string;
        /** Return only issues in series whose title starts with the input. */
        titleStartsWith?: string;
        /**
         * Return only issues in series whose start year matches the input.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only issues in series whose issue number matches the input.
         * @format int32
         */
        issueNumber?: number;
        /** Filter by diamond code. */
        diamondCode?: string;
        /**
         * Filter by digital comic id.
         * @format int32
         */
        digitalId?: number;
        /** Filter by UPC. */
        upc?: string;
        /** Filter by ISBN. */
        isbn?: string;
        /** Filter by EAN. */
        ean?: string;
        /** Filter by ISSN. */
        issn?: string;
        /** Include only results which are available digitally. */
        hasDigitalIssue?: boolean[];
        /**
         * Return only comics which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only comics which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only comics which take place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only comics which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). */
        sharedAppearances?: number[];
        /** Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). */
        collaborators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/series/${seriesId}/comics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic creators whose work appears in a specific series, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection5
     * @summary Fetches lists of creators filtered by a series id.
     * @request GET:/v1/public/series/{seriesId}/creators
     * @originalName getCreatorCollection
     * @duplicate
     */
    getCreatorCollection5: (
      seriesId: number,
      query?: {
        /** Filter by creator first name (e.g. brian). */
        firstName?: string;
        /** Filter by creator middle name (e.g. Michael). */
        middleName?: string;
        /** Filter by creator last name (e.g. Bendis). */
        lastName?: string;
        /** Filter by suffix or honorific (e.g. Jr., Sr.). */
        suffix?: string;
        /** Filter by creator names that match critera (e.g. B, St L). */
        nameStartsWith?: string;
        /** Filter by creator first names that match critera (e.g. B, St L). */
        firstNameStartsWith?: string;
        /** Filter by creator middle names that match critera (e.g. Mi). */
        middleNameStartsWith?: string;
        /** Filter by creator last names that match critera (e.g. Ben). */
        lastNameStartsWith?: string;
        /**
         * Return only creators which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only creators who worked on the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatorDataWrapper, any>({
        path: `/v1/public/series/${seriesId}/creators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of events which occur in a specific series, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetEventsCollection2
     * @summary Fetches lists of events filtered by a series id.
     * @request GET:/v1/public/series/{seriesId}/events
     * @originalName getEventsCollection
     * @duplicate
     */
    getEventsCollection2: (
      seriesId: number,
      query?: {
        /** Filter the event list by name. */
        name?: string;
        /** Return events with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only events which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only events which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only events which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only events which take place in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only events which contain the specified stories (accepts a comma-separated list of ids). */
        stories?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/series/${seriesId}/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic stories from a specific series with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetSeriesStoryCollection
     * @summary Fetches lists of stories filtered by a series id.
     * @request GET:/v1/public/series/{seriesId}/stories
     */
    getSeriesStoryCollection: (
      seriesId: number,
      query?: {
        /**
         * Return only stories which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only stories contained in the specified (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only stories which take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only stories which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/series/${seriesId}/stories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic stories with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetStoryCollection
     * @summary Fetches lists of stories.
     * @request GET:/v1/public/stories
     */
    getStoryCollection: (
      query?: {
        /**
         * Return only stories which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only stories contained in the specified (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only stories contained the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only stories which take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only stories which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/stories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This method fetches a single comic story resource.  It is the canonical URI for any comic story resource provided by the API.
     *
     * @tags public
     * @name GetStoryIndividual
     * @summary Fetches a single comic story by id.
     * @request GET:/v1/public/stories/{storyId}
     */
    getStoryIndividual: (storyId: number, params: RequestParams = {}) =>
      this.request<StoryDataWrapper, any>({
        path: `/v1/public/stories/${storyId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Fetches lists of comic characters appearing in a single story, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection6
     * @summary Fetches lists of characters filtered by a story id.
     * @request GET:/v1/public/stories/{storyId}/characters
     * @originalName getCreatorCollection
     * @duplicate
     */
    getCreatorCollection6: (
      storyId: number,
      query?: {
        /** Return only characters matching the specified full character name (e.g. Spider-Man). */
        name?: string;
        /** Return characters with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only characters which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only characters which appear in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only characters which appear the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CharacterDataWrapper, any>({
        path: `/v1/public/stories/${storyId}/characters`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comics in which a specific story appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetComicsCollection5
     * @summary Fetches lists of comics filtered by a story id.
     * @request GET:/v1/public/stories/{storyId}/comics
     * @originalName getComicsCollection
     * @duplicate
     */
    getComicsCollection5: (
      storyId: number,
      query?: {
        /** Filter by the issue format (e.g. comic, digital comic, hardcover). */
        format?: string;
        /** Filter by the issue format type (comic or collection). */
        formatType?: string;
        /** Exclude variant comics from the result set. */
        noVariants?: boolean[];
        /** Return comics within a predefined date range. */
        dateDescriptor?: string[];
        /** Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. */
        dateRange?: number[];
        /** Return only issues in series whose title matches the input. */
        title?: string;
        /** Return only issues in series whose title starts with the input. */
        titleStartsWith?: string;
        /**
         * Return only issues in series whose start year matches the input.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only issues in series whose issue number matches the input.
         * @format int32
         */
        issueNumber?: number;
        /** Filter by diamond code. */
        diamondCode?: string;
        /**
         * Filter by digital comic id.
         * @format int32
         */
        digitalId?: number;
        /** Filter by UPC. */
        upc?: string;
        /** Filter by ISBN. */
        isbn?: string;
        /** Filter by EAN. */
        ean?: string;
        /** Filter by ISSN. */
        issn?: string;
        /** Include only results which are available digitally. */
        hasDigitalIssue?: boolean[];
        /**
         * Return only comics which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only comics which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only comics which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only comics which take place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). */
        sharedAppearances?: number[];
        /** Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). */
        collaborators?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComicDataWrapper, any>({
        path: `/v1/public/stories/${storyId}/comics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic creators whose work appears in a specific story, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetCreatorCollection7
     * @summary Fetches lists of creators filtered by a story id.
     * @request GET:/v1/public/stories/{storyId}/creators
     * @originalName getCreatorCollection
     * @duplicate
     */
    getCreatorCollection7: (
      storyId: number,
      query?: {
        /** Filter by creator first name (e.g. brian). */
        firstName?: string;
        /** Filter by creator middle name (e.g. Michael). */
        middleName?: string;
        /** Filter by creator last name (e.g. Bendis). */
        lastName?: string;
        /** Filter by suffix or honorific (e.g. Jr., Sr.). */
        suffix?: string;
        /** Filter by creator names that match critera (e.g. B, St L). */
        nameStartsWith?: string;
        /** Filter by creator first names that match critera (e.g. B, St L). */
        firstNameStartsWith?: string;
        /** Filter by creator middle names that match critera (e.g. Mi). */
        middleNameStartsWith?: string;
        /** Filter by creator last names that match critera (e.g. Ben). */
        lastNameStartsWith?: string;
        /**
         * Return only creators which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only creators who worked on the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatorDataWrapper, any>({
        path: `/v1/public/stories/${storyId}/creators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of events in which a specific story appears, with optional filters. See notes on individual parameters below.
     *
     * @tags public
     * @name GetEventsCollection3
     * @summary Fetches lists of events filtered by a story id.
     * @request GET:/v1/public/stories/{storyId}/events
     * @originalName getEventsCollection
     * @duplicate
     */
    getEventsCollection3: (
      storyId: number,
      query?: {
        /** Filter the event list by name. */
        name?: string;
        /** Return events with names that begin with the specified string (e.g. Sp). */
        nameStartsWith?: string;
        /**
         * Return only events which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only events which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only events which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Return only events which are part of the specified series (accepts a comma-separated list of ids). */
        series?: number[];
        /** Return only events which take place in the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventDataWrapper, any>({
        path: `/v1/public/stories/${storyId}/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetches lists of comic series in which the specified story takes place. See notes on individual parameters below.
     *
     * @tags public
     * @name GetStorySeriesCollection
     * @summary Fetches lists of series filtered by a story id.
     * @request GET:/v1/public/stories/{storyId}/series
     */
    getStorySeriesCollection: (
      storyId: number,
      query?: {
        /** Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). */
        events?: number[];
        /** Filter by series title. */
        title?: string;
        /** Return series with titles that begin with the specified string (e.g. Sp). */
        titleStartsWith?: string;
        /**
         * Return only series matching the specified start year.
         * @format int32
         */
        startYear?: number;
        /**
         * Return only series which have been modified since the specified date.
         * @format date
         */
        modifiedSince?: string;
        /** Return only series which contain the specified comics (accepts a comma-separated list of ids). */
        comics?: number[];
        /** Return only series which feature work by the specified creators (accepts a comma-separated list of ids). */
        creators?: number[];
        /** Return only series which feature the specified characters (accepts a comma-separated list of ids). */
        characters?: number[];
        /** Filter the series by publication frequency type. */
        seriesType?: string;
        /** Return only series containing one or more comics with the specified format. */
        contains?: string[];
        /** Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. */
        orderBy?: string[];
        /**
         * Limit the result set to the specified number of resources.
         * @format int32
         */
        limit?: number;
        /**
         * Skip the specified number of resources in the result set.
         * @format int32
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SeriesDataWrapper, any>({
        path: `/v1/public/stories/${storyId}/series`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}
