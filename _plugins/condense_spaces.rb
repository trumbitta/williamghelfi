module Jekyll
  module CondenseFilter
    # Condenses multiple spaces and tabs into a single space
    def condense_spaces(input)
      input.gsub(/\s{2,}/, ' ')
    end
  end
end

Liquid::Template.register_filter(Jekyll::CondenseFilter)