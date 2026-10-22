import { test, expect } from 'bun:test';
import { canonicalRedirect } from './worker';
test('apex preserves path and query and forces HTTPS',()=>{const r=canonicalRedirect(new Request('http://tensorix.org/hello?q=one%20two'));expect(r?.status).toBe(308);expect(r?.headers.get('location')).toBe('https://www.tensorix.org/hello?q=one%20two');});
test('wildcard redirects to canonical without looping',()=>{expect(canonicalRedirect(new Request('https://unused.tensorix.org/a'))?.headers.get('location')).toBe('https://www.tensorix.org/a');expect(canonicalRedirect(new Request('https://www.tensorix.org/a'))).toBeNull();});
test('preview hosts serve assets',()=>expect(canonicalRedirect(new Request('https://tensorix-website.example.workers.dev/'))).toBeNull());
