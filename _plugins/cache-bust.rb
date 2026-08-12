# based on https://distresssignal.org/busting-css-cache-with-jekyll-md5-hash
# https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    class CacheDigester
      require 'digest/md5'
      require 'pathname'

      attr_accessor :file_name, :directory

      def initialize(file_name:, directory: nil)
        self.file_name = file_name
        self.directory = directory
      end

      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      def directory_files_content
        target_path = File.join(directory, '**', '*')
        # sort for a stable digest across filesystems, binread so that any
        # non-text file in the tree cannot break the join with an encoding error
        Dir[target_path].sort.map{|f| File.binread(f) unless File.directory?(f) }.join
      end

      def file_content
        local_file_name = file_name.slice((file_name.index('assets/')..-1))
        File.read(local_file_name)
      end

      def file_contents
        is_directory? ? file_content : directory_files_content
      end

      def is_directory?
        directory.nil?
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: nil).digest!
    end

    def bust_css_cache(file_name)
      # the stylesheet sources live in _sass, not assets/_sass; pointing at a
      # directory that does not exist digests an empty string, so the query
      # string never changes and main.css stays cached across releases
      CacheDigester.new(file_name: file_name, directory: '_sass').digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)